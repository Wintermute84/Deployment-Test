async function test() {
  try {
    let response = await fetch('https://deployment-test-pink.vercel.app/home');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

test();
