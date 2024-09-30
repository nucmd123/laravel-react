<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {


        try {
            if ($request->hasCookie('access_token')) {
                $token = $request->cookie('access_token');
                $request->headers->set('Authorization', 'Bearer ' . $token);
            }
            $user = JWTAuth::parseToken()->authenticate();
        } catch (TokenExpiredException $err) {
            return response()->json(['message' => 'Token đã hết hạn'], 401);
        } catch (JWTException $err) {
            return response()->json(['message' => 'Token không hợp lệ'], 401);
        } catch (Exception $err) {
            return response()->json(['message' => 'Token không tồn tại'], 401);
        }

        return $next($request);
    }
}
