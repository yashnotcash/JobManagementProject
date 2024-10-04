package com.jobmanagement;
import io.grpc.Server;
import io.grpc.ServerBuilder;

public class JobServer {

    public static void main(String[] args) throws Exception {
        Server server = ServerBuilder.forPort(50051)
                .addService(new JobServiceImpl())
                .build();

        server.start();
        System.out.println("Server started");
        server.awaitTermination();
    }
}