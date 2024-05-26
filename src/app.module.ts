import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tomfyfe:lgVAYj34yumNoMHT@offical.owwmlam.mongodb.net/?retryWrites=true&w=majority&appName=offical/CalmPlan',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
