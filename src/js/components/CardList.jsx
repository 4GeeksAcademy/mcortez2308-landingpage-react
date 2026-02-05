import Card from "./Card";

function CardList() {
    return (
        <div className="container d-flex justify-content-around flex-wrap gap-4 my-5">
            <Card imageurl="https://picsum.photos/500/325?random=1"
                altText="Example 1"
                title="Card Title 1"
                text="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error corporis, quam sunt quidem eveniet et ipsum amet repellendus nihil odio dolores qui recusandae quia reprehenderit necessitatibus illo sequi facilis."
                buttonText="Find out more" />
            <Card imageurl="https://picsum.photos/500/325?random=2"
                altText="Example 2"
                title="Card Title 2"
                text="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error corporis, quam sunt quidem eveniet et ipsum amet repellendus nihil odio dolores qui recusandae quia reprehenderit necessitatibus illo sequi facilis."
                buttonText="Find out more" />
            <Card imageurl="https://picsum.photos/500/325?random=3"
                altText="Example 3"
                title="Card Title 3"
                text="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error corporis, quam sunt quidem eveniet et ipsum amet repellendus nihil odio dolores qui recusandae quia reprehenderit necessitatibus illo sequi facilis."
                buttonText="Find out more" />
            <Card imageurl="https://picsum.photos/500/325?random=4"
                altText="Example 4"
                title="Card Title 4"
                text="lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error corporis, quam sunt quidem eveniet et ipsum amet repellendus nihil odio dolores qui recusandae quia reprehenderit necessitatibus illo sequi facilis."
                buttonText="Find out more" />
        </div>
    )

}

export default CardList;