console.log('This is my profile page!');

const page = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Adanna Liu';
    h1.className = 'name';

    const ul = document.createElement('ul');
    ul.className = 'my-details';

    const details = [
        'I am currently a student at App Academy',
        'I have 2 cats named Beans and Jelly',
        'I like to crochet while listening to podcasts',
        'I recently started bouldering for fun and exercise',
        'I used to do wushu and dance in college'
    ]

    details.forEach(detail => {
        const li = document.createElement('li');
        li.innerText = detail;
        li.className = 'detail';
        ul.append(li);
    });

    wrapper.append(h1, ul);
    document.body.append(wrapper);
}

window.onload = () => {
    page();
}
