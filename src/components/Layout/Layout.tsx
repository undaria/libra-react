import { NavLink, Outlet } from 'react-router-dom';


// type MainLayoutProps = {
//     children: React.ReactNode;
//   };

const navigation = [
    { name: 'ホーム', to: '.'},
    { name: 'プロフィ―ル', to: './profile'},
    { name: '認知再構成法', to: './cbt'}
  ]

export const Layout: React.FC = () => {
    return (<>
       <nav className="bg-purple-900 text-white flex justify-between">
       <ul className="px-10 py-4 flex space-x-3 ">
        {navigation.map((item, index) => (
                <NavLink
                to = {item.to}
                key = {item.name}
                className="cursor-pointer"
                >
                    {item.name}
                </NavLink>
        ))};
       </ul>
     </nav>

        <Outlet />
    </>
    );
};

export default Layout