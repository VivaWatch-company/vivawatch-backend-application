import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriptionClientService } from './subscription-client.service';
import { CreateSubscriptionClientDto } from './dto/create-subscription-client.dto';
import { UpdateSubscriptionClientDto } from './dto/update-subscription-client.dto';

@Controller('subscription-client')
export class SubscriptionClientController {
  constructor(
    private readonly subscriptionClientService: SubscriptionClientService,
  ) {}

  @Post()
  create(@Body() createSubscriptionClientDto: CreateSubscriptionClientDto) {
    return this.subscriptionClientService.create(createSubscriptionClientDto);
  }

  @Get()
  findAll() {
    return this.subscriptionClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionClientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionClientDto: UpdateSubscriptionClientDto,
  ) {
    return this.subscriptionClientService.update(
      id,
      updateSubscriptionClientDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionClientService.remove(id);
  }
}
