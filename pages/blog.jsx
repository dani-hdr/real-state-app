import Container from "./../components/UI/Container";
import Card from "./../components/UI/Card";
import Head from "next/head";
const blog = () => {
  return (
    <Container>
       <Head>
        <title>blog page</title>
        <meta name="description" content="this is blog page"/>

      </Head>
    <Card className="mt-10">
      <h1 className="text-black dark:text-[#fff] text-4xl font-bold">Blog Page</h1>
      <p className="text-gray dark:text-slate-400 text-md mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        fugiat alias fuga omnis ullam suscipit officiis amet repellat
        possimus repellendus quod eaque vero nobis, consectetur dolores nam
        tenetur error ad, autem cupiditate. Adipisci aspernatur placeat
        iusto neque exercitationem explicabo animi modi ex asperiores facere
        perspiciatis consequatur corrupti officiis voluptatibus molestiae
        corporis, quibusdam nihil! Tempora cumque officia quo debitis
        perferendis reiciendis nam harum ea, ex repudiandae ab velit
        mollitia? Ex officiis, veritatis, culpa autem aspernatur corrupti
        accusantium sit provident aliquid tempore iure quas corporis impedit
        aliquam vel non quo? Amet, eveniet nihil quia repellat earum, nemo
        asperiores deserunt fugit culpa molestias nobis error at minima
        tempora, natus quasi reiciendis atque enim saepe repudiandae vero
        nulla beatae? Debitis omnis ea provident, eaque recusandae eos hic
        dolores placeat iure cumque. Eaque error magnam quibusdam aspernatur
        nobis eos eligendi accusantium possimus optio non maxime minima vero
        incidunt pariatur dignissimos harum, deleniti exercitationem
        asperiores nam sint hic libero eveniet, porro necessitatibus.
        Voluptate rem molestiae reprehenderit incidunt accusantium,
        necessitatibus omnis qui soluta minima, sapiente ut excepturi ad,
        illo sunt hic nisi quaerat. Voluptas eveniet dignissimos ipsam non
        perferendis aspernatur eum! Quam delectus voluptas vero! Repellat
        vero temporibus repudiandae aspernatur aliquam odit blanditiis
        dolorum assumenda laborum ab.
      </p>
    </Card>
  </Container>
  )
}

export default blog