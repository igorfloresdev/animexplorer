import bcrypt from 'bcrypt'

const saltRounds = 12

export const genHash = async (text: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(text, salt)

  return hash
}

export const compareHash = async (text: string, hash: string): Promise<boolean> => {
  const result = await bcrypt.compare(text, hash)

  return result
}
