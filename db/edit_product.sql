update products
set name = $2,
   price = $3,
   imgurl =$3
where id = $1;