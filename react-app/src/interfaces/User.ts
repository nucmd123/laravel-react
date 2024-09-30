export default interface User {
    id: number
    name: string
    email: string
    phone: string

    birthday?: string
    image?: string
    email_verified_at?: string

    province_id?: string
    district_id?: string
    ward_id?: string
    address?: string
    description?: string
    created_at?: string
    updated_at?: string
}
