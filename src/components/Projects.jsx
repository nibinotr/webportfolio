
// import React from 'react';
// import { Button, Card } from 'react-bootstrap';

// function Projects() {
//   return (
//     <div id="projects" className="text-center my-4">
//       <h2>Projects</h2>
//       <Card className="my-3">
//         <Card.Body>
//           <Card.Title>Project 1: Weather Dashboard</Card.Title>
//           <Card.Text>
//             A responsive weather dashboard displaying current weather conditions.
//           </Card.Text>
//           <Button variant="primary" href="https://your-weather-dashboard-link.com" target="_blank">
//             View Project
//           </Button>
//         </Card.Body>
//       </Card>
//       <Card className="my-3">
//         <Card.Body>
//           <Card.Title>Project 2: Product Enquiry Form</Card.Title>
//           <Card.Text>
//             An e-commerce enquiry form built with React Router DOM.
//           </Card.Text>
//           <Button variant="primary" href="https://your-enquiry-form-link.com" target="_blank">
//             View Project
//           </Button>
//         </Card.Body>
//       </Card>
//       {/* Add more project cards as needed */}
//     </div>
//   );
// }

// export default Projects;

import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Projects() {
  return (
    <div id="projects" className="text-center my-4">
      <h2>Projects</h2>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Travel Webpage</Card.Title>
          <Card.Text>
            A responsive travel webpage showcasing various travel destinations.
          </Card.Text>
          <Button variant="primary" href="https://nibinotr.github.io/travelwebpage/" target="_blank">
            View Project
          </Button>
        </Card.Body>
      </Card>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Simple Task List</Card.Title>
          <Card.Text>
            A simple task list application to manage daily tasks efficiently.
          </Card.Text>
          <Button variant="primary" href="https://nibinotr.github.io/arrayassignment/" target="_blank">
            View Project
          </Button>
        </Card.Body>
      </Card>
      {/* You can add more project cards as needed */}
    </div>
  );
}

export default Projects;

