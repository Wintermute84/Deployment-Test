async function test() {
  try {
    let response = await fetch('/home');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

test();
