export const gmailPattern = /^(?!.*\.\.)(?![.-])[a-zA-Z0-9.]{6,30}(?<![.-])$/
export const normalEmailPattern =
    // eslint-disable-next-line no-useless-escape
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

export const emailValidate = (email: string) => {
    if (!email) return false

    const emailParts = email.split('@')

    if (emailParts.length !== 2) return false

    const emailName = emailParts[0]
    const emailDomain = emailParts[1]

    if (emailName.length > 64) return false
    else if (emailDomain.length > 255) return false

    const domainParts = emailDomain.split('.')

    if (
        domainParts.some((part) => {
            return part.length > 63
        })
    )
        return false

    return normalEmailPattern.test(email)
}
