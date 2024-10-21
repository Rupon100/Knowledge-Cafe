import profile from '../../assets/profile.png' 

const Header = () => {
    return (
        <div className='container mx-auto  p-8 flex justify-between items-center'>
            <h1 className="text-xl  text-center font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="profile image" />
        </div>
    );
};

export default Header;