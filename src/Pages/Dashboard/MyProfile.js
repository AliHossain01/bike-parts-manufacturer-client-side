import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (

        <div className='grid grid-cols-1 gap-2 justify-items-center'>
            <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-100">
                <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
                <div class="flex justify-center -mt-8">
                    <img src={user?.photoURL} class="rounded-full border-solid border-white border-2 -mt-3" />
                </div>
                <div class="text-center px-3 pb-6 pt-2">
                    <h3 class="text-pink-500 text-sm bold font-sans">{user?.displayName}</h3>
                    <p class="mt-2 font-sans font-light text-pink-500">Hello, i'm from another the other side!</p>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;