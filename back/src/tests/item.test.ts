import request from "supertest";
import app from "../app";
import { connect, closeDatabase, clearDatabase } from "./test-db";
import Item from "../models/item";

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});

describe("API Items",()=> {
  it("POST /api/item --Create Item", async() =>{
    const res = await request(app)
    .post('/api/item')
    .send({ name: 'Masterball', categories: ['capture'], description: "Master ball" });
    
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Masterball');
    expect(res.body.categories).toHaveLength(1);
    expect(res.body.description).toBe("Master ball");

    const iteminDb = await Item.find();
    expect(iteminDb).toHaveLength(1);
  });

  it('GET /api/item --Get all items', async () => {
    await Item.create({ name: 'Masterball', categories: ['capture'], description: "Master ball" });
    await Item.create({ name: 'Super portion', categories: ['heal'], description: "Super potion" })

    const res = await request(app).get('/api/item');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(2);
  });

  it('GET /api/item/:id - Get an item from id', async () => {
    const item = await Item.create({ name: 'Masterball', categories: ['capture'], description: "Master ball" });

    const res = await request(app).get(`/api/item/${item._id}`);
    
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Masterball');
  });

  it('PUT /api/item/:id - Update an Item', async () => {
    const item = await Item.create({ name: 'Masterball', categories: ['capture'], description: "ball" });
    const res = await request(app)
      .put(`/api/item/${item._id}`)
      .send({ name: 'Masterball modified', categories: ['capture'], description: "Master ball" });

    expect(res.statusCode).toBe(204);
  });

  it('Delete /api/item/:id - Delete an Item', async () => {
    const item = await Item.create({ name: 'Masterball', categories: ['capture'], description: "ball" });
    const res = await request(app)
      .delete(`/api/item/${item._id}`)
      .send({ name: 'Masterball modified', categories: ['capture'], description: "Master ball" });

    expect(res.statusCode).toBe(204);
  });




});