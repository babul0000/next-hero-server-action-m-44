// import { auth } from '@/lib/auth'

export const createData = async(formData) => {
'use server'

const name = formData.get('name')
// const content = formData.get('content')

console.log("name data", formData);

} 