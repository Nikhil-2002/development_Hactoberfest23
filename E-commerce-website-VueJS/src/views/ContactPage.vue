<template>
    <div class="contact-us-container py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="mb-4">Get In Touch</h2>
            <p class="text-muted mb-4">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" v-model="formData.name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control" id="email" v-model="formData.email" required>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Your Message</label>
                <textarea class="form-control" id="message" rows="5" v-model="formData.message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-lg-6">
            <img src="https://static.vecteezy.com/system/resources/previews/006/859/994/non_2x/black-letter-telephone-location-and-address-icons-print-screen-on-wooden-cube-block-for-customer-service-contact-concept-free-photo.jpg" alt="Contact Us Image" class="rounded">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log('Form submitted:', this.formData);
        // You can send form data to your backend or perform other actions as needed
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-us-container {
    padding: 60px 0;
  }
  
  .form-control {
    border-color: #007bff;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  </style>
  