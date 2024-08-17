import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  console.log(user);
    
  return (
    <div className="p-4 rounded-full" >
      <h1>{user?.name}</h1>
    </div>
  );
};

export default Profile;
