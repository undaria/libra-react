import { NavLink, Outlet } from 'react-router-dom';


// type MainLayoutProps = {
//     children: React.ReactNode;
//   };

const navigation = [
    { name: 'ホーム', to: './'},
    { name: '認知再構成法', to: './cbt'},
    { name: '勉強一覧', to: './study'},
    { name: 'プロフィ―ル', to: './profile'}
  ]

export const Layout: React.FC = () => {
    return (<>
       <nav className="bg-indigo-800 text-white flex justify-between">
       <ul className="px-20 py-4 flex space-x-5 ">
        {navigation.map((item, index) => (
                <NavLink
                to = {item.to}
                key = {item.name}
                className="cursor-pointer"
                >
                    {item.name}
                </NavLink>
        ))}
       </ul>
     </nav>
     <div className='bg-slate-50'>
        <Outlet />
      </div>
    </>
    );
};

export default Layout