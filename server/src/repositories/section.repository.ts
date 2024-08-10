import { DbService } from "../config/db";

export class SectionRepository {
  constructor(private readonly _db: DbService) {}

  async getAll() {
    return this._db.sectionModel.find();
  }

  async getById(id: string) {
    return this._db.sectionModel.findById(id);
  }

  async create(data: { name: string }) {
    return  this._db.sectionModel.create(data);
  }

  async update(id: string, data: { name: string }) {
    return this._db.sectionModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return this._db.sectionModel.findByIdAndDelete(id);
  }
}
