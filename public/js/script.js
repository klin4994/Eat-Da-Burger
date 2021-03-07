// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }

// Add new burger
  const addBurgerBtn = document.getElementById('addBurger');
    
  if (addBurgerBtn) {
    addBurgerBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Grabs the value of the textarea that goes by the name, "quote"
      const newBurger = {
        name: document.getElementById('newBurger').value.trim(),
        devoured: false,
      };

      // Send POST request to create a new burger
      fetch('/api/burgers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newBurger),
      }).then(() => {
        // Empty the form
        document.getElementById('newBurger').value = 'a';

        // Reload the page so the user can see the new quote
        console.log('New burger added!');
        location.reload();
      });
    });
  }

  // UPDATE devour
  const devourBtns = document.querySelectorAll('.devour');

  // Set up the event listener for the create button
  if (devourBtns) {
    devourBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');

        const toDevour = {
          devoured : true,
        };

        fetch(`/api/burgers/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(toDevour),
        }).then((response) => {
          // Check that the response is all good
          // Reload the page so the user can see the devoured burger in the 'Devoured' list
          if (response.ok) {
            console.log(`You just devoured a burger!`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }


})
function myFunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
  }