
import jobs from '../data/jobs.json';
import { useParams } from "react-router-dom";
import { Briefcase, DoorClosed, MapPinIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function JobPage() {
  const { id } = useParams(); 
  const job = jobs.find((job, ind) => job.jobId == id);

  return (
    <>
      <div className="flex justify-between mt-5">
        <h1 className="text-4xl font-black font-sans lg:text-6xl">{job.roleName}</h1>
        <img src={job.logoPath} alt="company logo" className="h-14 object-fill sm:h-12 w-20 " />
      </div>
      <section className="flex mt-10 justify-between lg:mt-14 mb-10">
        <div className="flex justify-around items-center">
            <MapPinIcon size={"14px"} className="mr-0" /> {/* Location icon */}
          <p className="text-sm font-semibold ml-1">{job.location}</p>
        </div>
        <div className="flex justify-around items-center">
            <Briefcase size={"14px"} className="mr-0" /> {/* Location icon */}
            <p className="text-sm font-semibold ml-1">100 Applicants</p>
        </div>
        <div className="flex justify-around items-center">
            <DoorClosed size={"14px"} className="mr-0" /> {/* Location icon */}
            <p className="text-sm font-semibold ml-1">Closed</p>
        </div>
      </section>
      <Select>
        <SelectTrigger className="w-full h-14 font-semibold bg-red-950 text-white text-base ">
          <SelectValue placeholder="Hiring Status - Open" />
        </SelectTrigger>
        <SelectContent className="font-extralight bg-red text-white">
          <SelectItem value="open" className=" bg-red-950 text-white hover:cursor-pointer">Open</SelectItem>
          <SelectItem value="close" className="bg-red-950 text-white hover:cursor-pointer">Close</SelectItem>
          <SelectItem value="suspend" className="bg-red-950 text-white hover:cursor-pointer">Suspend/Freeze</SelectItem>
        </SelectContent>
      </Select>
      <h1 className="text-3xl font-bold lg:text-4xl mt-8 text-justify ">About the Job</h1>
      <section className="mt-6 min-h-20 h-auto">
        {job.jobDescription}
      </section>
      <h1 className="text-3xl font-bold lg:text-4xl mt-8">What we are looking for</h1>
      <section className="mt-6 min-h-20 h-auto">
        <ul className="list-disc ml-6 space-y-2">
        { job.requirements.map((req, ind) => (
            <li key={ind}>{req}</li>))
        }
</ul>

      </section>


    </>
  );
}

export default JobPage;
