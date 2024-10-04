<template>
  <div class="job-details" v-if="job">
    <h2>Job Details</h2>
    <div class="job-info">
      <p><strong>ID:</strong> {{ job.jobid }}</p>
      <p><strong>Name:</strong> {{ job.jobname }}</p>
      <p><strong>Status:</strong> <span :class="statusClass(job.jobstatus)">{{ mapJobStatus(job.jobstatus) }}</span></p>
      <p><strong>Created At:</strong> {{ formatDate(job.createdat) }}</p>
    </div>
    <button @click="goBack">Back to Job List</button>
  </div>
</template>

<script>
import { JobServiceClient } from '../grpc/Job_managementServiceClientPb.ts';
import * as JobManagement from "@/grpc/job_management_pb";

export default {
  data() {
    return {
      job: null  // Holds job details
    };
  },
  methods: {
    fetchJobDetails() {
      const request = new JobManagement.JobId();
      request.setId(this.$route.params.jobId);

      const client = new JobServiceClient('http://localhost:8080');

      client.getJobDetails(request, {}, (err, response) => {
        if (!err) {
          this.job = response.toObject();
        } else {
          console.error('Error fetching job details:', err);
        }
      });
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
    },
    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    goBack() {
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchJobDetails();  // Fetch job details when component is mounted
  }
};
</script>

<style scoped>
.job-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.job-details h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.job-info {
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 20px;
}

.job-info p {
  font-size: 1.2em;
  margin: 15px 0;
}

.job-info strong {
  color: #2c3e50;
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

button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1a242f;
}
</style>
