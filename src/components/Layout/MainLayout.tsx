import { NavLink, Outlet } from 'react-router-dom';


type MainLayoutProps = {
    children: React.ReactNode;
  };

  
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <main>{children}</main>
    );
};

export default MainLayout