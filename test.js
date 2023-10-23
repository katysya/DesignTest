/*Date*/
const orders = [
  {
    id: '24003874339',
    status: 'Передано в SAP',
    statusChangeTime:
      'Sun Oct 24 2021 10:24:00 GMT+0300 (Москва, стандартное время)',
  },
  {
    id: '010001247991',
    status: 'Доставлен',
    statusChangeTime:
      'Mon May 24 2021 11:59:00 GMT+0300 (Москва, стандартное время)',
  },
  {
    id: '13030778733',
    status: 'Ожидает оплаты',
    statusChangeTime:
      'Mon Oct 25 2021 15:45:00 GMT+0300 (Москва, стандартное время)',
  },
  {
    id: '010001247987',
    status: 'Аннулирован',
    statusChangeTime:
      'Thu Dec 12 2019 19:52:00 GMT+0300 (Москва, стандартное время)',
  },
  {
    id: 'DB000006008',
    status: 'Новый',
    statusChangeTime:
      'Mon Oct 25 2021 16:50:00 GMT+0300 (Москва, стандартное время)',
  },
];
const statuses = [
  'Новый',
  'Ожидает оплаты',
  'Передано в SAP',
  'Доставлен',
];

function changeStatus(id) {
  let indexObject = orders.findIndex(
    (element) => element.id === String(id)
  );

  if (indexObject < 0)
    return {
      error: `Заказа с данным id: ${id} не существует!`,
    };

  let index = statuses.findIndex(
    (element) => element === orders[indexObject].status
  );
  if (index >= 0 && index != statuses.length - 1) {
    let date = new Date();
    orders[indexObject].status = statuses[index + 1];
    orders[indexObject].statusChangeTime = date;
    return {
      status: 'success',
      message: `Статус заказа ${id} изменен на ${orders[indexObject].status}`,
    };
  } else {
    const text =
      index == -1
        ? `Ошибка! Ваш заказ анулирован!`
        : `Ошибка! Ваш заказ уже доставлен!`;
    return {
      status: 'error',
      message: `${text}`,
    };
  }
}

console.log(changeStatus('24003874339'));
