
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("ok"), 2000);
  });
}

export default async function Login() {
  const data = await getData();

  return <h1>niceeeee</h1>;
}
