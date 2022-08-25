import Layout from '@/components/Layout/Layout';
import { ContentLayout } from '@/components/Layout/ContentLayout';
import { useAuth } from '@/lib/auth';

//import { UpdateProfile } from '../components/UpdateProfile';

type EntryProps = {
  label: string;
  value: string;
};
const Entry = ({ label, value }: EntryProps) => (
  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
  </div>
);

export const Profile = () => {
  const { user } = useAuth();
  if (!user) return null;
  //console.log(user.username)
  return (
    <ContentLayout title="プロフィール">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">ユーザー情報</h3>
           {/* <UpdateProfile /> */}
          </div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">ユーザーの詳細情報</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <Entry label="ユーザー名" value={user.username} />
            <Entry label="メールアドレス" value={user.email} />

          </dl>
        </div>
      </div>
    </ContentLayout>
  );
};
