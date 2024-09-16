import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import {Badge, badgeVariants} from '../ui/badge';

import {HoverCard, HoverCardTrigger, HoverCardContent} from '../ui/hover-card'




const MenuItems = ({brief,description,image,name,type}) => {

  return (
    <Card>
      <CardHeader>
        <img src={image} className='rounded mb-4' alt='' /> <hr />
      </CardHeader>
      <CardContent>
        <article className='flex justify-between capitalize text-lg font-sans text-gray-600 mb-8'>
          <h4 className='uppercase'>{name}</h4>
          <Badge variant='destructive'>{type}</Badge>
        </article>
        <CardDescription>{brief}</CardDescription>
      </CardContent>
      <CardFooter>
        <HoverCard>
          <HoverCardTrigger>
            <button className='text-blue-600 capitalize hover:underline'>see info</button>
          </HoverCardTrigger>
          <HoverCardContent>
            {description}
          </HoverCardContent>
        </HoverCard>
      </CardFooter>
    </Card>
  );
};
export default MenuItems;
