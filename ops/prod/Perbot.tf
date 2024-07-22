resource "aws_ecs_cluster" "my_cluster1" {
  provider = aws.eu-central
  name     = var.cluster_name
}

resource "aws_ecs_task_definition" "perbotTaskDefinition1" {
  provider                   = aws.eu-central
  family                     = var.task_definition_family
  network_mode               = "awsvpc"
  requires_compatibilities   = ["FARGATE"]

  cpu    = "2048"   # CPU units for the task
  memory = "4096"   # Memory (in MiB) for the task

  execution_role_arn = aws_iam_role.ecs_task_execution_role.arn

  container_definitions = jsonencode([
    {
      name      = var.container_name
      image     = "058264122535.dkr.ecr.eu-central-1.amazonaws.com/liquidator-pyth:${var.bots_image_tag}"
      essential = true
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/${var.container_name}"
          "awslogs-region"        = "eu-central-1"
          "awslogs-stream-prefix" = "ecs"
        }
      }
    }
  ])
}

resource "aws_iam_role" "ecs_task_execution_role-7" {
  provider = aws.eu-central
  name     = "ecs-task-execution-role-7"
  
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
        Action    = "sts:AssumeRole"
      }
    ]
  })
  
  managed_policy_arns = [
    "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy",
    "arn:aws:iam::aws:policy/AWSOpsWorksCloudWatchLogs"
  ]
}

resource "aws_ecs_service" "my_ecs_service1" {
  provider         = aws.eu-central
  name             = var.ecs_service_name
  cluster          = aws_ecs_cluster.my_cluster.id
  task_definition  = aws_ecs_task_definition.perbotTaskDefinition.arn
  desired_count    = var.desired_count
  launch_type      = "FARGATE"
  network_configuration {
    subnets         = var.subnet_ids
    security_groups = var.security_group_ids
    assign_public_ip = true
  }
}