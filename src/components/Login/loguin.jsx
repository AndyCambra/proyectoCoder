import Input from '../Input/Input'
import './index.css'

const Login = () => {
  return (
    <section>
      <form className="form-container">
        <h3>Ingrese sus datos</h3>
        <Input type="text" placeholder="email" />
        <Input type="password" placeholder="password" />
        <button type="submit">GO</button>
      </form>
    </section>
  )
}
export default Login
