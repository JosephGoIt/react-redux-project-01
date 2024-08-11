import LoginForm from '../components/LoginForm/LoginForm';
import s from './Login.module.css';

const Login = () => {
  return (
    <div className={s.container}>
      <LoginForm signIn />
    </div>
  );
};

export default Login;