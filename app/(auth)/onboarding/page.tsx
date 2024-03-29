import AccountProfile from "@/components/forms/AccountProfile";
import {currentUser} from '@clerk/nextjs';

async function Page(){
    const user = await currentUser();

    const userInfo = {};
    const userData = {
        id:"Come from the database...",
        objectId:"Come from the database..."
    };
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20"> 
            <h1 className="head-text">
                OnBoarding
            </h1>
            <p className="mt-3 text-base-regulat text-light-2">
                Complete your profile now to use Threads
            </p>

            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile/>
            </section>
        </main>
    )
}

export default Page;