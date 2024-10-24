provider "google" {
  project = "csci-5409-term-project"
  region  = "us-central1"
}

resource "google_container_cluster" "cluster-1" {
  name               = "cluster-1"
  location           = "us-central1-c"
  initial_node_count = 1
  deletion_protection = false

  node_config {
    machine_type = "e2-small"
    disk_size_gb = 10
    disk_type    = "pd-standard"
    image_type   = "COS_CONTAINERD"
  }

  lifecycle {
    prevent_destroy = false
  }
}

resource "google_compute_disk" "disk-1" {
  name  = "disk-1"
  type  = "pd-standard"
  zone  = "us-central1-c"
  size  = 10

  lifecycle {
    prevent_destroy = false
  }
}