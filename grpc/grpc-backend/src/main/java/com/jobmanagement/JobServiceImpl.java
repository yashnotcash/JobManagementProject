package com.jobmanagement;

import io.grpc.stub.StreamObserver;
import jobmanagement.JobManagement;
import jobmanagement.JobServiceGrpc;

public class JobServiceImpl extends JobServiceGrpc.JobServiceImplBase {
    @Override
    public void listAllJobs(JobManagement.Empty request, StreamObserver<JobManagement.JobList> responseObserver) {
        JobManagement.Job job1 = JobManagement.Job.newBuilder()
                .setJobId("1")
                .setJobName("Developer")
                .setJobStatus(JobManagement.JobStatus.SUBMITTED)
                .setCreatedAt("2024-10-01")
                .build();

        JobManagement.Job job2 = JobManagement.Job.newBuilder()
                .setJobId("2")
                .setJobName("Manager")
                .setJobStatus(JobManagement.JobStatus.RUNNING)
                .setCreatedAt("2024-09-30")
                .build();

        JobManagement.JobList jobList = JobManagement.JobList.newBuilder()
                .addJobs(job1).addJobs(job2).build();

        responseObserver.onNext(jobList);
        responseObserver.onCompleted();
    }

    @Override
    public void getJobDetails(JobManagement.JobId request, StreamObserver<JobManagement.JobDetails> responseObserver) {
        // Job details for the selected job
        JobManagement.JobDetails jobDetails = JobManagement.JobDetails.newBuilder()
                .setJobId(request.getId())
                .setJobName("Manager")
                .setJobStatus(JobManagement.JobStatus.RUNNING)
                .setCreatedAt("2024-09-30")
                .build();

        responseObserver.onNext(jobDetails);
        responseObserver.onCompleted();
    }
}