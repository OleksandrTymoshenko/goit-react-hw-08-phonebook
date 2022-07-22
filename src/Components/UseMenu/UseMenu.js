import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/authentication/authOperations';
import s from './UseMenu.module.css';
function UseMenu() {
  const emailUser = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const submitLogOut = e => {
    e.preventDefault();
    dispatch(logOut(token));
  };
  return (
    <>
      <div className={s.formContainer}>
        <b>{emailUser}</b>
        <form className={s.form} onSubmit={submitLogOut}>
          <button className={s.logOutBtn} type="submit">
            Exit 🔒
          </button>
        </form>
      </div>
    </>
  );
}

export default UseMenu;
