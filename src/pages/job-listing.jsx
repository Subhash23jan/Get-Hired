import JobCard from '@/components/job-card';
import jobsList from '../data/jobs.json';

function JobListing() {
  return (
    <div>
      <h1 className='flex justify-center mb-14 text-5xl  lg:text-7xl font-black'>
        Latest Jobs
      </h1>
      <div className='flex justify-center flex-wrap gap-10'>
        {
          jobsList.map((job, ind) => {
            return (
              <JobCard 
                key={ind} 
                job={job} 
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default JobListing;
