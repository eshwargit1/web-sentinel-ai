import Header from "./Header.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="p-3 xs:p-4 sm:p-5 md:p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
