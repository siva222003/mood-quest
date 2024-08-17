import { api } from "@/axios";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { formatDate } from "@/lib/date-formatter";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import { X } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const { user } = useAuth();

  const { toast } = useToast();

  const getCronExpression = (date: Dayjs): string => {
    const minute = date.minute();
    const hour = date.hour();
    const dayOfMonth = date.date();
    const month = date.month() + 1;
    const dayOfWeek = date.day();

    return `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
  };

  const [date, setDate] = useState<Dayjs | null>(null);

  const handleAccept = async (newDate: Dayjs | null) => {
    if (!newDate) return;

    setDate(newDate);

    try {
      const res = await api.post("/mail/start", {
        name: user?.name,
        date: getCronExpression(newDate),
      });
      toast({
        title: "Reminder started",
        description: "Email reminder has been started",
      });

      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error starting reminder",
        description: "An error occurred while starting the email reminder",
        variant: "destructive",
      });
    }
  };

  const handleStop = async () => {
    try {
      const res = await api.post("/mail/stop");
      console.log(res.data);
      setDate(null);
      toast({
        title: "Reminder stopped",
        description: "Email reminder has been stopped",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error stopping reminder",
        description: "An error occurred while stopping the email reminder",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="flex gap-4 justify-center items-center h-full">
      <div className="p-6 m-6 rounded-lg shadow-md w-fit bg-white border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Name:</label>
          <h2 className="text-xl font-semibold text-gray-900">{user?.name || "Siva"}</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Email:</label>
          <h2 className="text-lg text-gray-700">{user?.email || "Not available"}</h2>
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Joined:</label>
          <h2 className="text-lg text-gray-700">
            {formatDate(user?.createdAt!) || "Not available"}
          </h2>
        </div>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker
          className="w-fit rounded-lg shadow-md"
          defaultValue={dayjs("2022-04-17T15:30")}
          onAccept={handleAccept}
        />
      </LocalizationProvider>

      {date && (
        <div className="p-6 m-6 rounded-lg relative shadow-md w-fit bg-white border border-gray-200">
          <X
            className="w-6 absolute top-3 right-3 h-6 text-red-500 cursor-pointer"
            onClick={handleStop}
          />
          <h1 className="text-2xl font-semibold text-gray-800 my-4">Selected Date and Time</h1>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium">Date and Time:</label>
            <h2 className="text-xl font-semibold text-gray-900">
              {date.format("YYYY-MM-DD HH:mm")}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
