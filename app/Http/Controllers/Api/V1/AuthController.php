<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public $tokenTTL;
    public function __construct()
    {
        $this->tokenTTL = JWTAuth::factory()->getTTL() * 60;
    }

    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->tokenTTL,
        ]);
    }

    public function login(AuthRequest $req)
    {
        $credentials = [
            'email' => $req->input('email'),
            'password' => $req->input('password'),
        ];

        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json([
                'error' => 'Tài khoản hoặc mật khẩu chưa chính xác'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = auth('api')->user();
        $accessTokenCookie = Cookie::make('access_token', $token, $this->tokenTTL,);

        return $this->respondWithToken($token, $user)->withCookie($accessTokenCookie);
    }

    public function me()
    {
        return response()->json(
            new UserResource(auth('api')->user())
        );
    }
}
