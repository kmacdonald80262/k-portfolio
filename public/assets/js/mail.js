const form   = document.querySelector('form'), 

      submit = form.querySelector('.send');





function handleMail(e){

    e.preventDefault;



    let formData = new FormData(form),

        maildata = {};





    for (let [key, value] of formData.entries()){

        maildata[key] = value;



    let url = '/submit';



    fetch(url, {

        method: 'POST',

        header: {

            'Accept': 'application/json, text/plain, */*',

            'Content-type': 'application/json'

        },

        body: JSON.stringify(maildata)

    })



        .then(res => res.json())

        .then(data => {

            console.log(data);



            if(data.response.includes('OK')){

                form.reset();

                // alert('Message was sent succesfully!');

            }

        })

        .catch((err) => console.log(err));



    console.log('Trying to send mail...');

    }

}



form.addEventListener('submit', handleMail);