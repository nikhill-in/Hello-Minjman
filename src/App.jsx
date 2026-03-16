import './App.css'
import AppRoutes from './routes/AppRoutes'
// import { useEffect } from 'react';
// import { getMe } from './services_api/features/auth/authThunks';
// import { useDispatch } from 'react-redux';

function App() {
// const dispatch = useDispatch();
// useEffect(() => {
//   if (document.cookie.includes("accessToken")) {
//     dispatch(getMe());
//   }
// }, [dispatch]);
  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
