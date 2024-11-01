import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
    const loggedIn = { firstName: 'Dog Nitt'}; // Fixed missing quote and completed LastName

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        subtext="Your digital banking experience"
                        user={loggedIn?.firstName || 'Guest'} // Dynamically sets user prop
                        subtext="Access and manage your account and transaction efficiently."
                    />

                    <TotalBalanceBox 
                    accounts = {[]}
                    totalBank={1}
                    totalCurrentBalance= {1875654.89}
                    />
                </header>
            </div>
        </section>
    );
};

export default Home;
