import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Elements/Button';
import { InputField } from '@/components/Form/InputField';
import { Layout } from '../components/Layout';
import { useAuth } from '@/lib/auth';
import { Form } from '@/components/Form/Form';
import * as z from 'zod';

const schema = z
  .object({
    username: z.string().min(1, 'Required'),
    email: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  });

type RegisterValues = {
  username: string;
  email: string;
  password: string;
};

export const Register = () => {
  const { register, isRegistering } = useAuth();
  const navigate = useNavigate();
  const onSuccess = () => {
    alert('success create user');
    navigate('/');
  }
  return (
    <Layout title="新規登録">
      <Form<RegisterValues, typeof schema>
        onSubmit={async (values) => {
          await register(values);
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
          type="text"
          label="ユーザー名"
          registration={register('username')}
        />
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
              <Button isLoading={isRegistering} type="submit" className="w-full">
              登録
              </Button>
        </div>
        </>
         )}
        </Form>

      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link to="../login" className="font-medium text-blue-600 hover:text-blue-500">
            ログイン
          </Link>
        </div>
      </div>

      </Layout>
  );
};