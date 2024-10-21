import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {
  const loggedIn =  await getLoggedInUser();
  return (
    <section className="home">
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type = "greeting"
                title = "Welcome"
                user = { loggedIn?.name || 'Guest'}
                subtext ="Access and manage your account and transactions efficiently. 
                Explore your account details, view transaction history, and make secure payments with ease."
                />   

                 <TotalBalanceBox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {2250.58}
                 />
            </header>
               RECENT TRANSACTIONS
        </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 434.60}, 
            {currentBalance: 246.70}]}
        />
    </section>
  )
}

export default Home