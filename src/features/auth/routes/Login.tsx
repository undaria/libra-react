import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';
import { Layout } from '../components/Layout';
import { useAuth } from '@/lib/auth';
import * as z from 'zod';
import { Form } from '@/components/Form/Form';

//import { Layout } from '../components/Layout';
//import { LoginForm } from '../components/LoginForm';

const schema = z
  .object({
    email: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  });

type LoginValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const { login, isLoggingIn } = useAuth();
  const navigate = useNavigate();
  const onSuccess = () => {
    alert('success login here');
    navigate('/');
  };
  return (
    <Layout title="アカウントログイン">
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          await login(values);
          onSuccess();
        }}
        schema={schema}
        options={{
        shouldUnregister: true,
        }}
      >
         {({ register, formState }) => (
          <>
        <InputField
        type="email"
        label="メールアドレス"
        registration={register('email')}
        />
        <InputField
        type="password"
        label="パスワード"
        registration={register('password')}
        />
        <div className="mt-2">
                <Button isLoading={isLoggingIn} type="submit" className="w-full">
                ログイン
                </Button>
        </div>
        </>
         )}
        </Form>
        
          <div className="mt-5 flex items-center justify-end">
        <div className="text-sm">
        
          <Link to="../register" className="font-medium text-blue-600 hover:text-blue-500">
            新規登録
          </Link>
        </div>
      </div>
      
  </Layout>
  );
};