
// Building a food delivery service application where users can order food, track the preparation and delivery process, and get real-time updates.
function createOrder(orderId){
    let status = 'Order Placed';
    
    function updateStatus(newStatus){
        status = newStatus;
    }
    
    function getStatus(){
        return status;
    }
    
    return { updateStatus, getStatus };
}

function prepareFood(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.updateStatus("Food Prepared");
            resolve("Food is ready");
            console.log("Food is ready");
        }, 2500)
    });
}

function deliverOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.updateStatus("Deliver Order");
            resolve("Order Delivered");
            console.log("Order Delivered");
        }, 3500);
    });
}

function completeOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.updateStatus("Order Complete");
            resolve("Order is Completed");
            console.log("Order is Completed");
        }, 2000);
    })
}


async function handleOrder(orderId){
     const order = createOrder(orderId);
     try 
     {
        await prepareFood(order);
        await deliverOrder(order);
        await completeOrder(order);
       console.log(`Order ${orderId} is completed. Final status: ${order.getStatus()}`);
     }
     catch (error){
         console.log(`ERROR IS: ${error}`);
     }
}

handleOrder(12345);

