<template>
  <div class="job-list">
    <h1>Job List</h1>
    <div class="jobs-container">
      <div
          class="job-card"
          v-for="job in jobs"
          :key="job.jobid"
          @click="viewJobDetails(job.jobid)"
      >
        <h2>{{ job.jobname }}</h2>
        <p>Status: <span :class="statusClass(job.jobstatus)">{{ mapJobStatus(job.jobstatus) }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { JobServiceClient } from '../grpc/Job_managementServiceClientPb.ts';
import { Empty } from '../grpc/job_management_pb';

export default {
  data() {
    return {
      jobs: []
    };
  },
  methods: {
    fetchJobs() {
      const client = new JobServiceClient('http://localhost:8080');  // gRPC-Web client
      const request = new Empty();  // Empty message for ListAllJobs

      client.listAllJobs(request, {}, (err, response) => {
        if (!err) {
          this.jobs = response.getJobsList().map((a) => a.toObject());
          console.log(this.jobs);
        } else {
          console.error('Error fetching jobs:', err);
        }
      });
    },
    viewJobDetails(jobId) {
      this.$router.push(`/job/${jobId}`);  // Navigate to job details view
    },
    mapJobStatus(status) {
      switch (status) {
        case 0:
          return 'SUBMITTED';
        case 1:
          return 'RUNNING';
        case 2:
          return 'COMPLETED';
        default:
          return 'UNKNOWN';
      }
    },
    statusClass(status) {
      switch (status) {
        case 0:
          return 'status-submitted';
        case 1:
          return 'status-running';
        case 2:
          return 'status-completed';
        default:
          return 'status-unknown';
      }
    }
  },
  mounted() {
    this.fetchJobs();  // Fetch jobs when component is mounted
  }
};
</script>

<style scoped>
.job-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.job-list h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.jobs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.job-card {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 20px;
  width: calc(50% - 20px);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.job-card h2 {
  margin: 0 0 10px;
  font-size: 1.5em;
}

.job-card p {
  margin: 0;
  font-size: 1.1em;
  color: #555;
}

.status-submitted {
  color: #f39c12; /* Orange */
}

.status-running {
  color: #3498db; /* Blue */
}

.status-completed {
  color: #27ae60; /* Green */
}

.status-unknown {
  color: #7f8c8d; /* Gray */
}
</style>