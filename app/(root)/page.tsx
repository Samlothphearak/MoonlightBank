import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Samloth", lastName: 'Phearak', email: 'samlothphearak@gmail.com'}; // Fixed missing quote and completed LastName

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Your digital banking experience"
            user={loggedIn?.firstName || "Guest"} // Dynamically sets user prop
            subtext="Access and manage your account and transaction efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBank={1}
            totalCurrentBalance={10.89}
          />
        </header>
        RECENTLY TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance:1.89},{ currentBalance:1.78}]} // Make sure this is correctly typed
      />
    </section>
  );
};

export default Home;
