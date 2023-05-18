import { Request, Response } from "express";
import { getItemsDetails, getItemsList } from "../middlewares/MlMiddleware";
import { listFormatter } from "../utils/ListFormatter";
import { detailFormatter } from "../utils/DetailFormatter";

export const getItems = (req: Request, res: Response) => {
  const search = req.query.q;
  if (search && typeof search === "string") {
    getItemsList(search).then((response: any) => {
        const formattedList = listFormatter(response.data);
        res.send(formattedList);
    }
    );
  }

};

export const getItemDetail = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const {item, description} = await getItemsDetails(id);
        const itemDetails = detailFormatter(item, description)
        
        res.send(itemDetails);
      } catch (error) {
        res.status(500).json({ error: 'Error al obtener los detalles del item' });
      }
};
