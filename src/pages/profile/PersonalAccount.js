import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountMenu from './AccountMenu';
import Chat from './Chat';
import ChatWindow from './ChatWindow';
import Favorites from './Favorites';
import Instructions from './Instructions';
import MyWallet from './MyWallet';
import NewAd from './NewAd';
import Partners from './Partners';
import ProfileSettings from './ProfileSettings';
import UserAds from './UserAds';
import UserProfile from './UserProfile';

export default function PersonalAccount() {
    const [mob, setMob] = useState(false);
    useEffect(() => {
        function updateView() {
            if(window.matchMedia("(max-width: 991px)").matches){
                setMob(true);
            } else {
                setMob(false);
            }
        }
        window.addEventListener('resize', updateView);
        updateView();
        return () => window.removeEventListener('resize', updateView);
    }, []);

    return (
        <main>
            <div class="container py-4 py-sm-5">
            {
                (mob === false) ?
                <div class="row">
                    <div class="col-md-4 col-lg-3">
                        <AccountMenu />
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <Routes>
                            <Route path="/" element={<UserProfile />} />
                            <Route path="profile" element={<UserProfile />} />
                            <Route path="profile/partners" element={<Partners />} />
                            <Route path="instructions" element={<Instructions />} />
                            <Route path="settings" element={<ProfileSettings />} />
                            <Route path="my-ads" element={<UserAds />} />
                            <Route path="my-ads/new-ad" element={<NewAd />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path="chat" element={<Chat />} />
                            <Route path="chat/window" element={<ChatWindow />} />
                            <Route path="wallet" element={<MyWallet />} />
                        </Routes>
                    </div>
                </div>
                : <Routes>
                    <Route path="/" element={<AccountMenu />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="profile/partners" element={<Partners />} />
                    <Route path="instructions" element={<Instructions />} />
                    <Route path="settings" element={<ProfileSettings />} />
                    <Route path="my-ads" element={<UserAds />} />
                    <Route path="my-ads/new-ad" element={<NewAd />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="chat/window" element={<ChatWindow />} />
                    <Route path="wallet" element={<MyWallet />} />
                </Routes>
            }
            </div>
        </main>
    );
}