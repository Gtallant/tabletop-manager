import Typography from '@mui/material/Typography';
import Layout from '../../layout/layout';
import Login from '../../login/login';
import { userConfig, UserType } from '../../login/constants';

const Home = ({ userType }: {
  userType: UserType
}
) => {
  const userTypeConfig = userConfig[userType];
  const { displayName, greeting } = userTypeConfig;
  return (
    <>
      <Layout>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          {greeting(displayName)}
        </Typography>
        {userType === 'NONE' && <Login />}
      </Layout>
    </>
  )
}

export default Home;
