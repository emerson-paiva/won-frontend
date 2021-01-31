import { Auth } from 'templates'
import { SignIn as FormSignIn } from 'components'

export default function SignIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  )
}
